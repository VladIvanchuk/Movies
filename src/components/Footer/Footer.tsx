export const Footer = () => {
    return (
        <footer className = 'ant-layout-footer'>
            <p style = { { textAlign: 'center' } }>© { new Date().getFullYear() }</p>
        </footer>
    );
};
