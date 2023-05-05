import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSize() {
    return (
        <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Pagination count={4} size="large" />
        </Stack>
    );
}