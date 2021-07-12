<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    // horizontal-align: center;
    vertical-align: center;
  }
</style>

<template>
  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; "/>
          <Span>{{ message() }} No Rawr</Span>
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>
