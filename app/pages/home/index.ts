import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    message() {
        return "Blank {N}-Vue app";
    }
}
