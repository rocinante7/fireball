import classNames from 'classnames';

import { traitsKeys } from 'data/gotchi.data';
import itemUtils from 'utils/itemUtils';

import styles from './styles';

export default function GotchiTraits({ traits, currentTraits }) {
    const classes = styles();

    const renderDefaultTrait = (trait, id) => {
        if (id < traits.length - 2) {
            return <span className={classes.defaultVal}>
                ({trait})
            </span>;
        }
    }

    return (
        <div className={classes.gotchiTraits}>
            {
                traits.map((traitVal, index) => {
                    const traitKey = itemUtils.getTraitIconByName(traitsKeys[index]);

                    return (
                        <div
                            className={classNames(classes.gotchiTrait, itemUtils.getRarityByTrait(currentTraits[index]))}
                            key={index}
                        >
                            <img alt='trait icon' src={traitKey} className={classes.gotchiTraitIcon} />
                            <p className={classes.mainVal}>
                                <span className={classes.modifiedValue}>{currentTraits[index]}</span>
                                {renderDefaultTrait(traitVal, index)}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
}
