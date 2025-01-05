import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';


const AnimatedCircularProgress = ({ targetValue }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false); // Для отслеживания видимости блока
    const ref = useRef(null); // Реф для отслеживания элемента

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Элемент в видимой области
                }
            },
            {
                threshold: 0.1, // Процент видимости элемента, при котором срабатывает
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Очищаем наблюдение
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= targetValue) {
                        clearInterval(timer); // Останавливаем таймер
                        return prevProgress;
                    }
                    return prevProgress + 1;
                });
            }, 10); // Скорость анимации

            return () => {
                clearInterval(timer); // Очищаем таймер при размонтировании
            };
        }
    }, [isVisible, targetValue]);

    function FacebookCircularProgress(props) {
        return (
            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="determinate"
                    sx={(theme) => ({
                        color: theme.palette.grey[200],
                        ...theme.applyStyles('dark', {
                            color: theme.palette.grey[800],
                        }),
                    })}
                    size={200}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="determinate"
                    value={progress}
                    thickness={4}
                    size={200}
                    sx={(theme) => ({
                        color: '#1a90ff',
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                        ...theme.applyStyles('dark', {
                            color: '#141fe8',
                        }),
                    })}
                />
            </Box>
        );
    }

    return (
        <Box
            ref={ref} // Привязываем реф к элементу
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ position: 'relative', width: 300, height: 300 }}
        >
            <FacebookCircularProgress />
            {/* Прогресс */}



            {/* Текст с процентом внутри */}
            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <Typography
                    variant="h3"
                    color="text.primary"
                >
                    {`${Math.round(progress)}%`}
                </Typography>
            </Box>
        </Box>
    );
};

export default AnimatedCircularProgress