import React from 'react';

interface HotPostProps {
    rank: number;
    title: string;
}

const Posts = [
    { rank: 1, title: '국민연금과 개인연금의 차이점' },
    { rank: 2, title: '청년 우대형 청약통장은 일반 청약통장과 어떻게 다른가요?' },
    { rank: 3, title: '청년 전월세 대출을 받으면 이자 지원을 받을 수 있나요?' },
    { rank: 4, title: '연말정산 시 어떤 항목들이 소득공제로 적용되나요?' },
    { rank: 5, title: '사회초년생이 가입할 만한 보험 상품' },
    { rank: 6, title: '청년 전월세 대출 이자 지원' },
];

// 함수: 제목이 30자를 넘을 경우 자르고 '...'을 추가하는 로직
const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
};

const HotPost: React.FC<HotPostProps> = ({ rank, title }) => {
    return (
        <div style={styles.hotPost}>
            <div style={styles.rank}>{rank}</div>
            <div style={styles.title}>{truncateTitle(title, 20)}</div> {/* 30자 제한 적용 */}
        </div>
    );
};

const HotPosts: React.FC = () => {
    return (
        <div style={styles.hotPostList}>
            <div style={styles.mainTitle}>인기 있는 오늘의 질문</div>
            <div style={styles.date}>10.16. (수) 실시간 기준</div>
            <div style={styles.gridContainer}>
                {Posts.map((post) => (
                    <div style={styles.postCard} key={post.rank}>
                        <HotPost rank={post.rank} title={post.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    hotPostList: {
        backgroundColor: '#f4fef6',
        padding: '20px',
        borderRadius: '8px',
        width: '600px',
    },
    mainTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    date: {
        fontSize: '12px',
        color: '#666',
        marginBottom: '15px',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
    },
    postCard: {
        backgroundColor: '#ffffff',
        padding: '5px',
        borderRadius: '8px',
        minHeight: '50px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #D3D3D3'
    },
    hotPost: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '10px',
        width: '100%',
    },
    rank: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#0066cc',
        marginRight: '10px',
    },
    title: {
        fontSize: '14px',
        color: '#333',
        cursor: 'pointer',
        transition: 'color 0.3s, textDecoration 0.3s',
        width: '100%',
    },
    titleHover: {
        textDecoration: 'underline',
        color: '#004c99',
    },
};

export default HotPosts;
