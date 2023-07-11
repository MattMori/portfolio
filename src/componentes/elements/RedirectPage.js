import React, { useEffect } from 'react';

function RedirectPage() {
  useEffect(() => {
    // Obtém a largura da tela
    const screenWidth = window.innerWidth;

    // Define o URL de redirecionamento com base no tamanho da tela
    let redirectUrl;
    if (screenWidth <= 768) {
      redirectUrl = 'https://portfoliomateusmori.netlify.app/'; // Redireciona para a página mobile
    } else {
      redirectUrl = 'https://portfolio-mori-blue.vercel.app/'; // Redireciona para a página desktop
    }

    // Redireciona para o URL definido
    window.location.href = redirectUrl;
  }, []);

  return (
    <div>
      <h1>Redirecionando...</h1>
      {/* Você pode exibir uma mensagem ou indicador de redirecionamento aqui */}
    </div>
  );
}

export default RedirectPage;
