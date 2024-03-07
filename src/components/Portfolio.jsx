import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './Portfolioitem';

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        isEmpty={!project.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
