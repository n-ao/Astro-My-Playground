type titleProps = {
    children: React.ReactNode;
};

const Title: React.FC<titleProps> = ({ children }) => {
    return <h3>{ children } </h3>;
};

export default Title;