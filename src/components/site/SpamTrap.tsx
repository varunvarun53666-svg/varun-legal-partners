export function SpamTrap({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div hidden aria-hidden="true"><label>Website<input name="trap" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} /></label></div>;
}