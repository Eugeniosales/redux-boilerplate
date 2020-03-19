import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
    repository: Repository
}

const RepoItem = ({ repository }: OwnProps) =>  {
    return (
        <div> {repository.name} </div>
    );
}  

export default RepoItem;