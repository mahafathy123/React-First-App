import React from 'react';
import { Skeleton, Box } from '@mui/material';

export default function ProductSkeleton() {
  return (
    <Box 
      className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col justify-between"
      sx={{ height: 360 }}
    >
      <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
      <Box sx={{ pt: 2, textAlign: 'center' }}>
        <Skeleton variant="text" width="80%" height={25} sx={{ mx: 'auto' }} />
        <Skeleton variant="text" width="40%" height={20} sx={{ mx: 'auto', mt: 1 }} />
      </Box>
      <Box className="flex justify-between mt-4">
        <Skeleton variant="rounded" width={36} height={36} />
        <Skeleton variant="rounded" width={36} height={36} />
      </Box>
    </Box>
  );
}