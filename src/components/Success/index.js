import React from 'react';
import { Box, Text, Anchor } from 'grommet';

export default function Success({ success, polkascanUri }) {
  return (
    <Box direction="row" wrap align="start" gap="small">
      <Box direction="row" wrap align="start" gap="small">
        <Text style={{ color: 'green' }}>{success.data.message}</Text>
      </Box>
      <Box direction="row" wrap align="start" gap="small">
        <Text>TxHash:</Text>
        <Anchor style={{ color: 'blue', paddingTop: '2px' }} href={`${polkascanUri}${success.data.tx_hash}`}>{success.data.tx_hash}</Anchor>
      </Box>
    </Box>
  );
}
