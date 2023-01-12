export const checkBackgroundColor = (status) => {
  if (status === 'destroyed') return '#eb6060';
  if (status === 'active') return '#7cd992';
  if (status === 'unknown') return '#f7e463';
  if (status === 'retired') return '#a8a8a8';
  return 'transparent';
};
export const labelContainer = 'flex justify-between';
export const titleStyle = 'text-[16px] capitalize font-bold';
export const dataStyle = 'text-[16px] capitalize';
