import { z } from 'zod';

export const BlockKindSchema = z.enum(['HEADING','PARAGRAPH','LIST_ITEM','TABLE_ROW']);

export type BlockKindType = `${z.infer<typeof BlockKindSchema>}`

export default BlockKindSchema;
