const validId = (id: string) => {
  const reg = /^[a-zA-Z0-9]{4,20}/;
  if (!id) return "아이디를 입력하여 주세요.";
  if (!reg.test(id)) return "영문,숫자를 사용하여 4~20자리를 입력하여주세요.";
  return "";
};

const validNickname = (name: string) => {
  const reg = /^[가-힣a-zA-Z0-9]{2,10}/;
  if (!name) return "닉네임을 입력하여 주세요.";
  if (!reg.test(name))
    return "한글,영문,숫자를 사용하여 2~10자리를 입력하여주세요.";
  return "";
};

const validPw = (pw: string) => {
  const reg =
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;

  if (!pw) return "패스워드를 입력하여 주세요.";
  if (!reg.test(pw))
    return "영문, 숫자, 특수문자 중 2가지를 조합하여 입력하여 주세요.";
  return "";
};

const validRePw = (rePw: string, pw: string) => {
  if (!rePw) return "비밀번호 확인을 입력하여 주세요.";
  if (rePw !== pw) return "입력하신 비밀번호와 다릅니다. 다시 입력해주세요.";
  return "";
};

const vaildDate = (date: string) => {
  const reg = /^[0-9]{8}/;
  if (!date) return "생년월일을 입력하여 주세요.";
  if (!reg.test(date))
    return "숫자만을 사용하여 8자리 생년월일을 입력하여 주세요.";
  return "";
};

export default {
  id: validId,
  nickname: validNickname,
  pw: validPw,
  rePw: validRePw,
  dateOfBirth: vaildDate,
};
