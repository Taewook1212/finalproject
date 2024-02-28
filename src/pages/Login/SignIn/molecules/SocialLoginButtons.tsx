import React from 'react';
import facebook from 'public/facebook-icon.svg';
import kakao from 'public/kakao-icon.svg';
import google from 'public/google-icon.svg';
import { kakaoURL } from '@/api/SocialKakao';
import SocialLoginButton from '@/pages/Login/SignIn/atoms/SocialLoginButton';

const SocialLoginButtons: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className=" flex flex-col gap-3">
      <SocialLoginButton
        label="Google"
        icon={google}
        onClick={() => {}}
        className="relative flex text-center rounded-xl border w-[28.625rem] h-[3.79rem]"
      />
      <SocialLoginButton
        label="Kakao"
        icon={kakao}
        onClick={handleKakaoLogin}
        className="relative flex text-center bg-yellow-300 rounded-xl w-[28.625rem] h-[3.79rem]"
      />
      <SocialLoginButton
        label="페이스북"
        icon={facebook}
        onClick={() => {}}
        className="relative flex text-center bg-blue-600 rounded-xl w-[28.625rem] h-[3.79rem]"
      />
    </div>
  );
};

export default SocialLoginButtons;
