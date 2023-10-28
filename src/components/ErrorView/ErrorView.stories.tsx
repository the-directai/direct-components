import ErrorView from './index';

export default {
  component: ErrorView,
  title: 'ErrorView',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test ErrorView',
      state: 'TASK_INBOX',
    },
  },
};