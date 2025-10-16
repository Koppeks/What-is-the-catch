import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockKindSchema } from './BlockKindSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BlockUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.BlockUncheckedCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  sectionId: z.string(),
  order: z.number().int(),
  kind: z.lazy(() => BlockKindSchema),
  level: z.number().int().optional().nullable(),
  ordinalPath: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string(),
  html: z.string().optional().nullable(),
  anchor: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default BlockUncheckedCreateWithoutDocumentInputSchema;
