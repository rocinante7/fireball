// animated
import ghstTokenGif from 'assets/images/animated/ghst-token.gif';
import gotchiHeartGif from 'assets/images/animated/gotchi-heart.gif';
import gotchiLoadingGif from 'assets/images/animated/gotchi-loading.gif';
import gotchiverseGif from 'assets/images/animated/gotchiverse.gif';
import h1OpenedPortalGif from 'assets/images/animated/h1-opened.gif';

// icons
import activity from 'assets/images/icons/activity.svg';
import alpha from 'assets/images/icons/alpha.svg';
import baazar from 'assets/images/icons/baazar.svg';
import consumable from 'assets/images/icons/consumable.svg';
import discord from 'assets/images/icons/discord.svg';
import fomo from 'assets/images/icons/fomo.svg';
import fud from 'assets/images/icons/fud.svg';
import gotchi from 'assets/images/gotchi-placeholder.svg';
import kek from 'assets/images/icons/kek.svg';
import ghst from 'assets/images/icons/ghst.svg';
import listing from 'assets/images/icons/listing.svg';
import logo from 'assets/images/icons/logo-white.svg';
import metamask from 'assets/images/icons/metamask.svg';
import purchase from 'assets/images/icons/purchase.svg';
import sold from 'assets/images/icons/sold.svg';
import twitch from 'assets/images/icons/twitch.svg';
import rareTicket from 'assets/images/tickets/rare.svg';
import warehouse from 'assets/images/wearables/15.svg';

// portals
import h1SealedPortal from 'assets/images/portals/h1-sealed.svg';
import h1OpenedPortal from 'assets/images/portals/h1-opened.svg';
import h2SealedPortal from 'assets/images/portals/h2-sealed.svg';
import h2OpenedPortal from 'assets/images/portals/h2-opened.svg';

// tokens
import alphaToken from 'assets/images/tokens/alpha-token.svg';
import fomoToken from 'assets/images/tokens/fomo-token.svg';
import fudToken from 'assets/images/tokens/fud-token.svg';
import ghstToken from 'assets/images/tokens/ghst-token.svg';
import kekToken from 'assets/images/tokens/kek-token.svg';

// animated
export const GhstTokenGif = ({ width, height }) => {
    return <img width={width} height={height} src={ghstTokenGif} alt='ghst token' />;
};

export const GotchiHeartGif = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={gotchiHeartGif} alt='gotchi heart' />;
};

export const GotchiLoadingGif = ({ width, height }) => {
    return <img width={width} height={height} src={gotchiLoadingGif} alt='gotchi loading...' />;
};

export const GotchiverseGif = ({ width, height }) => {
    return <img width={width} height={height} src={gotchiverseGif} alt='gotchiverse loader' />;
};

export const H1OpenedPortalGif = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={h1OpenedPortalGif} alt='H1 opened portal' />;
};

// icons
export const ActivityIcon = ({ width, height }) => {
    return <img width={width} height={height} src={activity} alt='activity' />;
};

export const AlphaIcon = ({ width, height }) => {
    return <img width={width} height={height} src={alpha} alt='alpha' />;
};

export const BaazarIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={baazar} alt='baazar' />;
};

export const FomoIcon = ({ width, height }) => {
    return <img width={width} height={height} src={fomo} alt='fomo' />;
};

export const FudIcon = ({ width, height }) => {
    return <img width={width} height={height} src={fud} alt='fud' />;
};

export const ConsumableIcon = ({ width, height }) => {
    return <img width={width} height={height} src={consumable} alt='consumable' />;
};

export const DiscordIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={discord} alt='discord' />;
};

export const GotchiIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={gotchi} alt='gotchi' />;
};

export const KekIcon = ({ width, height, alt }) => {
    return <img width={width} height={height} src={kek} alt={alt ?? 'kek'} />;
};

export const GhstIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={ghst} alt='ghst' />;
};

export const TwitchIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={twitch} alt='twitch' />;
};

export const RareTicketIcon = ({ width, height }) => {
    return <img width={width} height={height} src={rareTicket} alt='ticket' />;
};

export const WarehouseIcon = ({ width, height }) => {
    return <img width={width} height={height} src={warehouse} alt='warehouse' />;
};

// portals
export const H1SealedPortalIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={h1SealedPortal} alt='H1 sealed portal' />;
};

export const H1OpenedPortalIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={h1OpenedPortal} alt='H1 opened portal' />;
};

export const H2SealedPortalIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={h2SealedPortal} alt='H2 sealed portal' />;
};

export const H2OpenedPortalIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={h2OpenedPortal} alt='H2 opened portal' />;
};

// tokens
export const AlphaTokenIcon = ({ width, height }) => {
    return <img width={width} height={height} src={alphaToken} alt='alpha' />;
};

export const FomoTokenIcon = ({ width, height }) => {
    return <img width={width} height={height} src={fomoToken} alt='fomo' />;
};

export const FudTokenIcon = ({ width, height }) => {
    return <img width={width} height={height} src={fudToken} alt='fud' />;
};

export const GhstTokenIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={ghstToken} alt='ghst' />;
};

export const KekTokenIcon = ({ width, height }) => {
    return <img width={width} height={height} src={kekToken} alt='kek' />;
};

export const ListingIcon = ({ width, height }) => {
    return <img width={width} height={height} src={listing} alt='listing' />;
};

export const LogoIcon = ({ width, height }) => {
    return <img width={width} height={height} src={logo} alt='logo' />;
};

export const MetamaskIcon = ({ className, width, height }) => {
    return <img className={className} width={width} height={height} src={metamask} alt='metamask' />;
};

export const PurchaseIcon = ({ width, height }) => {
    return <img width={width} height={height} src={purchase} alt='purchase' />;
};

export const SoldIcon = ({ width, height }) => {
    return <img width={width} height={height} src={sold} alt='sold' />;
};
