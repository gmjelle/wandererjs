<!-- <template>
  <HardHighlight
    v-if="step.highlightType === 'HARD' && ready"
    :target="highlightTarget"
  />
  <SoftHighlight
    v-if="step.highlightType === 'SOFT' && ready"
    :target="highlightTarget"
  />

  <div
    v-if="ready"
    ref="container"
    id="wanderer-tooltip-container"
    data-wanderer-id="tooltip"
    :style="styles.container"
    class="
      wanderer-tooltip
      gdx-absolute
      gdx-shadow-lg
      gdx-rounded
      gdx-z-50
      gdx-px-5
      gdx-py-3
      gdx-max-w-sm
    "
  >
    <div ref="arrow" id="arrow" class="wanderer-tooltip-arrow"></div>
    <XIcon
      class="
        gdx-w-4 gdx-absolute gdx-top-1 gdx-right-1 gdx-cursor-pointer
        wanderer-close-button
      "
      :style="styles.closeButton"
      @click="onCloseButtonClicked"
    />
    <div class="gdx-flex gdx-flex-col">
      <div class="gdx-text-2xl" :style="styles.header">
        {{ step.headerText }}
      </div>
      <div class="gdx-mt-1" :style="styles.body">{{ step.bodyText }}</div>
    </div>
    <div
      v-if="progressType === 'BUTTON'"
      class="gdx-flex gdx-justify-between gdx-mt-2"
    >
      <div></div>
      <div
        class="gdx-px-3 gdx-py-1 gdx-text-xs gdx-rounded gdx-cursor-pointer"
        :style="styles.button"
        @click="goToNextStep"
      >
        Next
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  watch,
  computed,
  ref,
  nextTick,
} from "vue";
import { Theme, TooltipStep } from "../@types/index";
import { createPopper, Instance } from "@popperjs/core";
import { NEXT_STEP, STOP_TRIP } from "../events";
import { parseTheme } from "../utils/theme";
import HardHighlight from "./HardHightlight.vue";
import SoftHighlight from "./SoftHighlight.vue";
import arrive from "../utils/arrive";
import scrollToElementIfNecessary from "../utils/scroller";
import { XIcon } from "@heroicons/vue/outline";

const props = defineProps<{ step: TooltipStep; theme: Theme }>();

const emit = defineEmits([NEXT_STEP, STOP_TRIP]);
let popper: Instance | null = null;

const ready = ref(false);

const target = computed(() => {
  const { element } = props.step;
  if (typeof element === "string") {
    return <HTMLElement>document.body.querySelector(element);
  }

  return <HTMLElement>element;
});

const highlightTarget = ref();

const container = ref();
const arrow = ref();

async function performSetup() {
  ready.value = false;
  const element = await arrive(props.step.element);
  highlightTarget.value = element;
  ready.value = true;
  nextTick(() => {
    scrollToElementIfNecessary(element);
    setupPopper(element);
    setupProgress(element);
  });
}

watch(target, () => {
  performSetup();
});

const styles = computed(() => {
  const {
    backgroundColor,
    headerTextColor,
    bodyTextColor,
    fontFamily,
    headerSize,
    bodySize,
    nextButtonColor,
    nextButtonTextColor,
    border,
    closeButtonColor,
  } = parseTheme(props.theme);

  const container = {
    backgroundColor,
    fontFamily,
    border,
  };

  const header = {
    fontSize: headerSize,
    color: headerTextColor,
  };

  const body = {
    fontSize: bodySize,
    color: bodyTextColor,
  };

  const button = {
    color: nextButtonTextColor,
    backgroundColor: nextButtonColor,
  };

  const closeButton = {
    color: closeButtonColor,
  };

  return {
    header,
    body,
    container,
    button,
    closeButton,
  };
});

const root = document.documentElement;
root.style.setProperty("--arrow-color", props.theme.backgroundColor);
root.style.setProperty("--border", props.theme.border);

const progressType = computed(() => {
  return props.step.progressOn;
});

function setupProgress(element) {
  if (progressType.value === "BUTTON") return;
  element.addEventListener("click", goToNextStep, { once: true });
}

function setupPopper(element) {
  if (popper) popper.destroy();

  popper = createPopper(element, container.value, {
    modifiers: [
      { name: "offset", options: { offset: [10, 20] } },
      { name: "arrow", options: { element: arrow.value } },
    ],
  });
}

function goToNextStep() {
  emit(NEXT_STEP);
}

function onCloseButtonClicked() {
  emit(STOP_TRIP);
}

onMounted(() => {
  performSetup();
});

onBeforeUnmount(() => {
  popper?.destroy();
});
</script>

<style scoped></style> -->
