export type FileRowAuthor = {
  initial: string;
  name: string;
  color: string;
};

export type FileRowData = {
  id: string;
  selected?: boolean;
  icon: string;
  iconClassName: string;
  name: string;
  tags: string[];
  type: string;
  size: string;
  author: FileRowAuthor;
  date: string;
  access: string;
  accessClassName: string;
  status: string;
  statusClassName: string;
  statusDotClassName: string;
  version: string;
  showActions?: boolean;
  dim?: boolean;
};
