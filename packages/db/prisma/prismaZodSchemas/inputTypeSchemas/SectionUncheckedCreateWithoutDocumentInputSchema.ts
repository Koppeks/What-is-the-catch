import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SectionUncheckedCreateNestedManyWithoutParentInputSchema } from './SectionUncheckedCreateNestedManyWithoutParentInputSchema';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  parentId: z.string().optional().nullable(),
  level: z.number().int(),
  title: z.string().optional().nullable(),
  ordinalPath: z.string().optional().nullable(),
  headingText: z.string().optional().nullable(),
  headingHtml: z.string().optional().nullable(),
  headingAnchor: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  children: z.lazy(() => SectionUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  blocks: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutDocumentInputSchema;
