import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'FRK/Components/Profile/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'path-to-avatar-image', 
  alt: 'User Avatar',
};

export const NoImage = Template.bind({});
NoImage.args = {
  src: '', 
  alt: 'User Avatar',
};
