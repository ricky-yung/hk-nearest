import NearestSchoolRepository from "./NearestSchoolRepository";

const repositories = {
    nearestSchoolRepository: NearestSchoolRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};