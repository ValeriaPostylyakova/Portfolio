import ContentLoader from 'react-content-loader';

const ProjectHomeSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={283}
            height={176}
            viewBox="0 0 283 176"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="30" y="0" rx="6" ry="6" width="220" height="36" />
            <rect x="0" y="56" rx="6" ry="6" width="286" height="28" />
            <rect x="32" y="126" rx="7" ry="7" width="220" height="48" />
        </ContentLoader>
    );
};

export default ProjectHomeSkeleton;
