import styles from './homepage.module.css'
const HomePage = () => {
    return (
        <>
            <div className={`w-75 bg-primary mx-auto ${styles.body}`}>
                <p>
                    Homepage
                </p>
            </div>
        </>
    );
}

export default HomePage;