import axios, { AxiosResponse } from 'axios';
import { Lecture } from '../types';

const createCachedFetcher = <T>(fetcher: () => Promise<T>) => {
  let cache: Promise<T> | null = null;

  return () => {
    if (!cache) {
      console.log('API Call (새 요청)', performance.now());
      cache = fetcher();
    } else {
      console.log('API Call (캐시 사용)', performance.now());
    }
    return cache;
  };
};

const fetchMajors = createCachedFetcher(() =>
  axios.get<Lecture[]>('/schedules-majors.json'),
);
const fetchLiberalArts = createCachedFetcher(() =>
  axios.get<Lecture[]>('/schedules-liberal-arts.json'),
);

export const fetchAllLectures = async (): Promise<
  AxiosResponse<Lecture[]>[]
> => {
  return await Promise.all([
    fetchMajors(),
    fetchLiberalArts(),
    fetchMajors(),
    fetchLiberalArts(),
  ]);
};
