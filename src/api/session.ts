import instance from "lib/axios";
import { APIPretalxSessions } from "models/api/session";

export const listSessions = async () => {
  const result = await instance.get("/2024/sessions/");
  switch (result.status) {
    case 200:
      return result.data as APIPretalxSessions;
    default:
      throw new Error("세션 목록을 불러오는데 실패했습니다,\n잠시 후 다시 시도해주세요.");
  }
};

export const retrieveSession = async (code: string) => {
  const result = await instance.get(`/2024/sessions/${code}/`);
  switch (result.status) {
    case 200:
      return result.data as APIPretalxSessions[0];
    default:
      throw new Error("세션을 불러오는데 실패했습니다,\n잠시 후 다시 시도해주세요.");
  }
};
