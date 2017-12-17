(function(global) {
  class slideTransitionNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        A: new NIN.TextureInput(),
        B: new NIN.TextureInput(),
      };
      super(id, options);
    }

    update(frame) {
      this.uniforms.t.value = lerp(0, 1, (frame - FRAME_FOR_BEAN(21 * 48 + 42)) / 11);
      this.uniforms.A.value = this.inputs.A.getValue();
      this.uniforms.B.value = this.inputs.B.getValue();
    }
  }

  global.slideTransitionNode = slideTransitionNode;
})(this);