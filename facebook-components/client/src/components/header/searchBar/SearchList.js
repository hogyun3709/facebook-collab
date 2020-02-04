import React from 'react';
import SearchItem from './SearchItem';
import './SearchList.css';

class SearchList extends React.Component {
    // '리스트'와 같이 동적인 랜더의 경우 클래스형 선언이 이후 컴포넌트 성능 최적화에 유리
    // 리스트 데이터 양이 많아질수록 더 나은 사용자 경험을 위한 컨포넌트 최적화는 필수.
    render(){
        const { logs, onRemove } = this.props;
        const searchList = logs.map(
            (todo) => (
                <SearchItem 
                {...todo} // 지정 배열의 모든 값들이 props로 자동 설정 
                key={logs.id}
                onRemove={onRemove}
                />
            )
        );
        return(
            <React.Fragment>
                <div class="searchList-title">
                    최근 검색
                </div>
                <div class="searchList-items">
                    {searchList}
                </div>
            </React.Fragment>
        );
    }
}
export default SearchList;
