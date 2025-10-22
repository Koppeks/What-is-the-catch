import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DocumentCreateNestedOneWithoutSectionInputSchema } from './DocumentCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedOneWithoutChildrenInputSchema } from './SectionCreateNestedOneWithoutChildrenInputSchema';
import { SectionCreateNestedManyWithoutParentInputSchema } from './SectionCreateNestedManyWithoutParentInputSchema';
import { BlockCreateNestedManyWithoutSectionInputSchema } from './BlockCreateNestedManyWithoutSectionInputSchema';

export const SectionCreateInputSchema: z.ZodType<Prisma.SectionCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  level: z.number().int(),
  title: z.string().optional().nullable(),
  ordinalPath: z.string().optional().nullable(),
  headingText: z.string().optional().nullable(),
  headingHtml: z.string().optional().nullable(),
  headingAnchor: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutSectionInputSchema),
  parent: z.lazy(() => SectionCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => SectionCreateNestedManyWithoutParentInputSchema).optional(),
  blocks: z.lazy(() => BlockCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionCreateInputSchema;
