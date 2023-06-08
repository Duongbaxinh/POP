import { Link, Stack, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
function ListSearch({ data }) {
    const colors = useTheme()
    return (
        <Stack
            minHeight="200px"
            width="100%"
            sx={{
                color: colors.palette.my_white.main,
                backgroundColor: grey[900],
            }}
        >
            {data.map(({ _id, name }, index) => (
                <Stack
                    key={index}
                    sx={{
                        p: "5px",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        borderBottom: `1px solid ${colors.palette.my_white.main} `,
                    }}
                >
                    <Typography
                        component={Link}
                        href={`/watch/${_id}`}
                        sx={{
                            color: colors.palette.my_white.main,
                            textDecorationLine: "none",
                        }}
                    >
                        {name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
}

export default ListSearch;