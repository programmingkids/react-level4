import React from 'react';
import { Title } from './../blocks/Title';

export const NotFound = (props) => (
  <>
    <Title>Not Found</Title>
    <div className="description">
      このページは存在しません。URLを確認の上、再度アクセスしてください
    </div>
  </>
);
