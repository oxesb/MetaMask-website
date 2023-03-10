import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import styled, { withTheme } from 'styled-components'
import ContentWrapper from './ContentWrapper'
import ScrollAnimation from 'react-animate-on-scroll'
import classnames from 'classnames'
import { EyebrowStyle, Section } from './StyledGeneral'
import ImageItem from './Image'
import { contentfulModuleToComponent } from '../lib/utils/moduleToComponent'
import ContextClientSide from '../Context/ContextClientSide'
import Embed from './Embed'
import { parseContentfulAssetUrl } from '../lib/utils/urlParser'
import ParseMD from './ParseMD'

const FeatureComponent = props => {
  const {
    cta,
    ctaSecond,
    embed,
    headline,
    hideHeadline,
    description,
    image,
    withContent,
    imageWidth,
    alignItemsCenter,
    contentAlignment,
    contentPaddingTop,
    imageAlignment,
    animation,
    backgroundColor,
    backgroundImage,
    backgroundImageDarkMode,
    backgroundImageMobile,
    headlineMarginTop0,
    sectionPadding,
    noPaddingBottom,
    imageMobile,
    eyebrow,
    featureItems,
    imageDarkMode,
    imageMobileDarkMode,
    imageShadow,
    hideImageOnMobile,
    imageLink,
    customClass,
    previewMode = false,
  } = props
  const { darkMode: darkModeContextValue } = useContext(ContextClientSide)
  const { isDarkMode } = darkModeContextValue || {}
  const contentAlignLR = ['left', 'right'].includes(contentAlignment)
    ? contentAlignment
    : ''
  const isContentAlignVertical = contentAlignment === 'vertical'
  const innerContent = (
    <>
      {eyebrow ? (
        <EyebrowStyle className="hidden-mobile">{eyebrow}</EyebrowStyle>
      ) : null}
      {headline ? (
        <Headline
          hasEyebrow={eyebrow}
          hasCta={cta}
          hideHeadline={hideHeadline}
          headlineMarginTop0={headlineMarginTop0}
        >
          <div dangerouslySetInnerHTML={{ __html: headline }} />
        </Headline>
      ) : null}
      {description ? (
        <Description>
          {previewMode ? (
            <ParseMD>{description}</ParseMD>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </Description>
      ) : null}
      {featureItems && featureItems.length ? (
        <FeatureItems>
          {featureItems.map(m => (
            <FeatureItem>
              {contentfulModuleToComponent({
                ...m,
                previewMode,
              })}
            </FeatureItem>
          ))}
        </FeatureItems>
      ) : null}
      {cta && !isContentAlignVertical ? (
        <CTAWrapper>
          {contentfulModuleToComponent({
            ...cta,
            color: ['white', 'gray', 'default'].includes(backgroundColor)
              ? cta.color
              : 'white-outline',
            previewMode,
          })}
          {ctaSecond ? (
            <>
              {contentfulModuleToComponent({
                ...ctaSecond,
                color: ['white', 'gray', 'default'].includes(backgroundColor)
                  ? ctaSecond.color
                  : 'white-outline',
                previewMode,
              })}
            </>
          ) : null}
        </CTAWrapper>
      ) : null}
    </>
  )
  const imageContent = (
    <>
      {image ? (
        <ImageSrc
          className={classnames({
            'hidden-mobile': imageMobile,
          })}
          image={isDarkMode && imageDarkMode ? imageDarkMode : image}
          widthImg={imageWidth}
          imageAlignment={imageAlignment}
          link={imageLink}
          previewMode={previewMode}
        />
      ) : null}
      {imageMobile ? (
        <ImageSrc
          className={classnames('hidden-desktop')}
          image={
            isDarkMode && imageMobileDarkMode
              ? imageMobileDarkMode
              : imageMobile
          }
          widthImg={imageWidth}
          imageAlignment={imageAlignment}
          link={imageLink}
          previewMode={previewMode}
        />
      ) : null}
    </>
  )

  return (
    <Container
      sectionPadding={sectionPadding}
      image={backgroundImage}
      imageDarkMode={backgroundImageDarkMode}
      imageMobile={backgroundImageMobile}
      className={classnames({
        noPaddingBottom: noPaddingBottom,
        [`bg-${backgroundColor}`]: backgroundColor,
      })}
    >
      <ContentWrapper customClass={customClass}>
        <FeatureWrapper
          contentAlignLR={contentAlignLR}
          isContentAlignVertical={isContentAlignVertical}
          alignItemsCenter={alignItemsCenter}
          imageWidth={imageWidth}
          backgroundColor={backgroundColor}
          imageShadow={imageShadow}
          hideImageOnMobile={hideImageOnMobile}
          sectionPadding={sectionPadding}
        >
          {eyebrow ? (
            <EyebrowStyle className="hidden-desktop">{eyebrow}</EyebrowStyle>
          ) : null}
          {image || imageMobile ? (
            <SideImage>
              <Image>
                {animation ? (
                  <ScrollAnimation
                    animateIn={
                      contentAlignLR === 'right'
                        ? 'fadeInLeftMini'
                        : 'fadeInRightMini'
                    }
                    animateOnce
                    delay={0}
                    offset={0}
                  >
                    {imageContent}
                  </ScrollAnimation>
                ) : (
                  imageContent
                )}
              </Image>
            </SideImage>
          ) : null}
          {embed ? (
            <SideEmbed>
              <Embed
                html={embed.embed?.embed}
                thumbnailUrl={parseContentfulAssetUrl(
                  embed.thumbnail,
                  previewMode
                )}
                playOnPopup={embed.playOnPopup}
              />
            </SideEmbed>
          ) : null}
          <FeatureInner
            withContent={withContent}
            contentPaddingTop={contentPaddingTop}
          >
            {animation ? (
              <ScrollAnimation
                animateIn={
                  contentAlignLR === 'left'
                    ? 'fadeInLeftMini'
                    : 'fadeInRightMini'
                }
                animateOnce
                delay={0}
                offset={0}
              >
                {innerContent}
              </ScrollAnimation>
            ) : (
              <div>{innerContent}</div>
            )}
          </FeatureInner>
          {cta && isContentAlignVertical ? (
            <CTAWrapper>
              {contentfulModuleToComponent({
                ...cta,
                color: ['white', 'gray', 'default'].includes(backgroundColor)
                  ? cta.color
                  : 'white-outline',
                previewMode,
              })}
              {ctaSecond ? (
                <>
                  {contentfulModuleToComponent({
                    ...ctaSecond,
                    color: ['white', 'gray', 'default'].includes(
                      backgroundColor
                    )
                      ? ctaSecond.color
                      : 'white-outline',
                    previewMode,
                  })}
                </>
              ) : null}
            </CTAWrapper>
          ) : null}
        </FeatureWrapper>
      </ContentWrapper>
    </Container>
  )
}

export default withTheme(FeatureComponent)

FeatureComponent.propTypes = {
  image: PropTypes.object,
  headline: PropTypes.string,
  description: PropTypes.string,
  modules: PropTypes.arrayOf(PropTypes.object.isRequired),
  sectionPadding: PropTypes.string,
  noPaddingBottom: PropTypes.bool,
  previewMode: PropTypes.bool,
}

const Container = styled(Section)`
  ${({ image }) =>
    image
      ? ` background-image: url(${image});
      background-size: cover;
      background-position: center;
      height: 100%;
    `
      : ''}
  .dark-mode & {
    ${({ imageDarkMode }) =>
      imageDarkMode
        ? ` background-image: url(${imageDarkMode});
    `
        : ''}
  }
  ${({ imageMobile, theme }) =>
    imageMobile
      ? ` 
      @media (max-width: ${theme.device.mobileMediaMax}){
        background-image: url(${imageMobile});
      }
    `
      : ''}
`
const Image = styled.div`
  display: block;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    .floatImageRightMinus32 & {
      width: calc(50% + 32vw);
      max-width: 170%;
    }
  }
`
const SideImage = styled.div`
  display: block;
  flex: 1;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    .noPaddingBottom & {
      margin-bottom: 0 !important;
    }
  }

  .snapsLiveMetaMaskFlask & {
    padding: 0;
  }

  .sideImageMaxWidth667 & {
    max-width: 667px;
  }
`

const SideEmbed = styled.div`
  display: block;
  flex: 1;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    .noPaddingBottom & {
      margin-bottom: 0 !important;
    }
    width: 100%;
  }

  .snapsLiveMetaMaskFlask & {
    padding: 0;
  }
`
const ImageSrc = styled(ImageItem)`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: auto;
  height: auto;
  
  .imageWidth280 & {
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    .imageMobileMaxWidth180 & {
      max-width: 180px;
    }
  }
  
  ${({ widthImg, theme }) =>
    widthImg
      ? `
    width: ${widthImg};
    @media (max-width: ${theme.device.tabletMediaMax}){
      width: 100%;
    }
  `
      : ''}
  
  ${({ imageAlignment }) =>
    imageAlignment === 'left'
      ? `
    margin: 0 auto 0 0;
  `
      : ''}
  
  ${({ imageAlignment }) =>
    imageAlignment === 'right'
      ? `
    margin: 0 0 0 auto;
  `
      : ''}
`
const Headline = styled.h2`
  padding-bottom: 20px;
  font-weight: 700;
  ${({ hideHeadline }) =>
    hideHeadline
      ? `
    display: none;
  `
      : ''}
      
  ${({ headlineMarginTop0 }) =>
    headlineMarginTop0 ? 'margin-top: 0;' : 'margin-top: 40px;'}

  ${({ hasCta, theme }) =>
    !hasCta
      ? `
    @media (max-width: ${theme.device.tabletMediaMax}) {
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 15px;
      margin-top: 16px;
      padding-bottom: 0;
      padding-top: 0;
      text-align: center;
    }`
      : 'padding-bottom: 14px;'}

  ${({ hasEyebrow, theme }) =>
    hasEyebrow
      ? `
  @media (max-width: ${theme.device.tabletMediaMax}) {
    margin-top: 0;
    padding-top: 0;
  }
  `
      : ''}
`
const Description = styled.div`
  display: block;
  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    text-align: center;
    * {
      max-width: initial !important;
    }
  }
`
const FeatureWrapper = styled.div`
  display: flex;
  margin: -10px;
  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    flex-direction: column;
    margin: 0;
    align-items: center;
    text-align: center;
    ${SideImage} {
      margin-bottom: 32px;
    }
    ${SideEmbed} {
      margin-bottom: 32px;
    }
  }

  ${({ hideImageOnMobile, theme }) =>
    hideImageOnMobile
      ? `
      @media (max-width: ${theme.device.tabletMediaMax}) {
        ${SideImage} {
          display: none;
        }
        ${SideEmbed} {
          display: none;
        }
      }
  `
      : ''}
  
  ${({ imageShadow }) =>
    imageShadow
      ? `
      img {
        filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.1));
      }
  `
      : ''}
  
  ${({ contentAlignLR, theme }) =>
    contentAlignLR === 'left'
      ? `
      @media (min-width: ${theme.device.tablet}) {
        flex-direction: row-reverse;
      }
  `
      : ''}

  ${({ isContentAlignVertical }) =>
    isContentAlignVertical
      ? `
      flex-direction: column !important;
      ${CTAWrapper} {
        order: 4;
        margin-top: 20px;
      }
      ${SideImage} {
        order: 3;
      }
      ${SideEmbed} {
        order: 3;
      }
      ${FeatureInner} {
        order: 2;
      }
  `
      : ''}
  
  ${({ alignItemsCenter }) =>
    alignItemsCenter
      ? `
    align-items: center;
    justify-content: center;
  `
      : ''}
  
  ${({ alignItemsCenter, isContentAlignVertical }) =>
    alignItemsCenter && isContentAlignVertical
      ? `
    text-align: center;
  `
      : ''}
  
  & > * {
    padding: 10px;
    @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
      padding: 0 10px;
    }
  }
  
  ${({ sectionPadding }) =>
    sectionPadding === '0px'
      ? `
    & > * {
      padding-bottom: 0px;
    }
                `
      : ''}
  
  h1.feature-hero-title {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.xxxl}rem;
    line-height: 1.2;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: all 0.5s ease;

    @media (max-width: ${({ theme }) => theme.device.miniDesktopMediaMax}) {
    font-size: 46px;
    }
    @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
      font-size: 34px !important;
      line-height: 43px;
    }
  }
  .dark-mode & {
    svg path.can-fill-color {
      fill: ${({ theme }) => theme.white};
    }
  }
`
const FeatureInner = styled.div`
  display: block;
  ${({ contentPaddingTop }) =>
    contentPaddingTop
      ? `
    padding-top: ${contentPaddingTop};
  `
      : ''}
  ${({ withContent }) =>
    withContent
      ? `
    width: ${withContent};
  `
      : 'width: 50%'}
  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    width: 100%;
    padding-top: 0;
  }

  .contentWidth667 & {
    width: 667px;
    max-width: 100%;
  }
`
const CTAWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  row-gap: 8px;
  column-gap: 16px;
  margin-top: 40px;
  a {
    min-width: 160px;
  }
  .snapsLiveMetaMaskFlask & {
    order: 1;
    margin-top: 0;
    @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
      margin-bottom: 16px;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.mobileMediaMax}) {
    flex-wrap: wrap;
    .button {
      width: 100%;
    }
  }
`

const FeatureItems = styled.div`
  display: block;
  margin-top: 32px;
  margin-right: 32px;
  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    margin: 32px 0 auto auto;
  }
`
const FeatureItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 48px;
  }
`
