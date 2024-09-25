import React from 'react';

export const Success = ({ count, onClickUnSuccess }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>{count} пользователю(лям) отправлено приглашение.</p>
      <button onClick={() => onClickUnSuccess()} className="send-invite-btn">Назад</button>
    </div>
  );
};
