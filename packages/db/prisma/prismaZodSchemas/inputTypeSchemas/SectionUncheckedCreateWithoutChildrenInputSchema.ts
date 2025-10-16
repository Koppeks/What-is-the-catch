import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutChildrenInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  parentId: z.string().optional().nullable(),
  level: z.number().int(),
  title: z.string().optional().nullable(),
  ordinalPath: z.string().optional().nullable(),
  headingText: z.string().optional().nullable(),
  headingHtml: z.string().optional().nullable(),
  headingAnchor: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Block: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutChildrenInputSchema;
