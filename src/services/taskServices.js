import { httpAxios } from "@/helper/httpHelper";

export async function addWork(work){
    const result = await httpAxios
        .post("/api/works",work)
        .then((response) => response.data)
    return result
}

export async function getTaskOfUser(userId) {
    const result = await httpAxios
        .get(`/api/users/${userId}/works`)
        .then((response) => response.data)
    return result
    }

export async function deleteUser(workId) {
    const result = await httpAxios
        .delete(`/api/works/${workId}`)
        .then((response) => response.data)
    return result
    }    