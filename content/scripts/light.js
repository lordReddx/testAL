    public void add(float x, float y, float radius, Color color, float opacity){
        if(!enabled()) return;

        float res = color.toFloatBits();
        add(() -> {
            Draw.color(res);
            Draw.alpha(opacity);
            Draw.rect("circle-shadow", x, y, radius * 2, radius * 2);
        });
    }

    public void add(float x, float y, TextureRegion region, Color color, float opacity){
        if(!enabled()) return;

        float res = color.toFloatBits();
        add(() -> {
            Draw.color(res);
            Draw.alpha(opacity);
            Draw.rect(region, x, y);
        });
    }
//mainFrame.setBackground(Color.white);
//Draw.color(Color.white, Color.lightGray, e.fin())