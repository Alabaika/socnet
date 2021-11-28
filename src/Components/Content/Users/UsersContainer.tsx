import React from "react";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers
} from "../../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../../redux/usersSelectors";
import {UserType} from "../../../Types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: ( currentPage: number, pageSize: number ) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
type OwnPropsType = {

}


type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer  extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
        // this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
        // this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
    }
    render() {
        return <>
            {  this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose (
    // @ts-ignore
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
    {follow, unfollow, getUsers: requestUsers })
)(UsersContainer)