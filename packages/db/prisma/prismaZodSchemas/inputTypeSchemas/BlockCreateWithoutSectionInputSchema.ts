import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockKindSchema } from './BlockKindSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DocumentCreateNestedOneWithoutBlockInputSchema } from './DocumentCreateNestedOneWithoutBlockInputSchema';
import { SectionCreateNestedManyWithoutHeadingBlockInputSchema } from './SectionCreateNestedManyWithoutHeadingBlockInputSchema';

export const BlockCreateWithoutSectionInputSchema: z.ZodType<Prisma.BlockCreateWithoutSectionInput> = z.strictObject({
  id: z.cuid().optional(),
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
  document: z.lazy(() => DocumentCreateNestedOneWithoutBlockInputSchema),
  Section: z.lazy(() => SectionCreateNestedManyWithoutHeadingBlockInputSchema).optional(),
});

export default BlockCreateWithoutSectionInputSchema;
