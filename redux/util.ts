export type ApiCallState<T> = {
    error: any,
    payload: T,
    isLoading: boolean,
    isLoaded: boolean
};

export type ActionType = {
    type: string,
    payload: any
}

export const resetApiCallState = (payload: any) => ({
    error: "",
    payload: payload,
    isLoading: false,
    isLoaded: false
});