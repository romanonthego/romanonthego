import React, {PureComponent} from 'react'
import Helmet from 'app/components/Helmet'
import TextScramble from 'app/components/Elements/TextScramble'
import LinkScramble from 'app/components/Elements/LinkScramble'
import TextPrint from 'app/components/Elements/TextPrint'
import SiteWrap from 'app/components/Layout/SiteWrap'
import Section from 'app/components/Layout/Section'
import BreadCrumbs from 'app/components/Layout/BreadCrumbs'
// import cx from 'classnames'
import css from './index.styl'

export default class TextScrambleDemo extends PureComponent {
  static propTypes = {}

  state = {
    text: 'hello world',
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      text: this.input.value,
    })
  }

  render() {
    const {text} = this.state

    return (
      <SiteWrap>
        <Helmet
          url={`${GLOBALS.BASE_URL}/playground/text-scramble/`}
          title="TextScramble Demo"
          description="Litlle text scramble effect as pureres react component"
          breadcrumbs={[
            {
              id: `${GLOBALS.BASE_URL}`,
              name: 'romanonthego',
            },
            {
              id: `${GLOBALS.BASE_URL}/playground/`,
              name: 'playground',
            },
            {
              id: `${GLOBALS.BASE_URL}/playground/text-scramble/`,
              name: 'TextScramble',
            },
          ]}
        />
        <Section>
          <BreadCrumbs>
            <LinkScramble to="/playground/">playground</LinkScramble>
            <p className="secondary">text scramble</p>
          </BreadCrumbs>
        </Section>
        <Section>
          <TextScramble component="h1">Text Scramble</TextScramble>
          <TextPrint component="p">
            React pure component for text scramble effect. Highly effective,
            only render what it absolutly needs to. Utilises
            `requestAnimationFrame` under the hood. Reworked to react component
            from{' '}
          </TextPrint>
          <LinkScramble to="https://codepen.io/soulwire/pen/mErPAK">
            Text Scramble Effect codepen
          </LinkScramble>
        </Section>
        <Section>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <input
                type="text"
                defaultValue={'well, hello'}
                ref={input => (this.input = input)} // eslint-disable-line
                autoFocus // eslint-disable-line
              />
              <button type="submit">apply text</button>
            </fieldset>
          </form>
        </Section>

        <Section>
          <main className={css.demo}>
            <TextScramble component="h1" className={css.demoText}>
              {text}
            </TextScramble>
          </main>
        </Section>
      </SiteWrap>
    )
  }
}