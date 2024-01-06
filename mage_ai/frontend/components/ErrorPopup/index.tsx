import Button from '@oracle/elements/Button';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import useErrorViews, { UseErrorViewsProps } from './useErrorViews';
import { Close, VisibleEye } from '@oracle/icons';
import {
  CloseButtonContainerStyle,
  ErrorPopupStyle,
} from './index.style';

function ErrorPopup({
  onClose,
  setMinimized,
  ...props
}: UseErrorViewsProps & {
  onClose?: () => void;
  setMinimized?: () => void;
}) {
  const {
    displayMessage,
    exception,
    links,
    stackTrace,
    traceback,
  } = useErrorViews(props);

  return (
    <ErrorPopupStyle>
      <CloseButtonContainerStyle>
        {setMinimized && (
          <>
          <Button
              iconOnly
              noBackground
              noBorder
              noPadding
              onClick={onClose}
              size={20}
              title="Close errors"
            >
              <VisibleEye />
            </Button>
            <div style={{ paddingRight: 24 }} />
          </>
        )}

        <Button
          iconOnly
          noBackground
          noBorder
          noPadding
          onClick={onClose}
          title="Close errors"
        >
          <Close />
        </Button>

      </CloseButtonContainerStyle>

      <Text bold large>
        Error
      </Text>

      {displayMessage && (
        <Spacing mt={1}>
          {displayMessage}
        </Spacing>
      )}

      {exception && (
        <Spacing mt={1}>
          {exception}
        </Spacing>
      )}

      {traceback && (
        <Spacing mt={2}>
          {traceback}
        </Spacing>
      )}

      {stackTrace && (
        <Spacing mt={2}>
          {stackTrace}
        </Spacing>
      )}

      {links}
    </ErrorPopupStyle>
  );
}

export default ErrorPopup;
