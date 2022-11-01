import React from "react";

const QrPage = () => {
  return (
    <main>
      <div className='frame'>
        <img src='https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=200x200' />
      </div>
    </main>
  );
};

export default QrPage;
