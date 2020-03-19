import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepoItem from '../RepoItem';

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps;

//const RepositoryList: React.FC = () => {
class RepositoryList extends Component <Props>{
    
    componentDidMount() {
        const { loadRequest } = this.props;
        
        loadRequest();
    }
    
    render() {

        const { repositories } = this.props;

        return (
            <div>
                {
                    repositories.map(repo => (
                        <RepoItem repository={repo} />
                    ))
                }
            </div>
        )
    }
}

const mapStatetoProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
});

const mapDispatchtoProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(RepositoryList);