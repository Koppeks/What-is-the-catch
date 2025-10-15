import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutSectionInputSchema } from './DocumentUpdateWithoutSectionInputSchema';
import { DocumentUncheckedUpdateWithoutSectionInputSchema } from './DocumentUncheckedUpdateWithoutSectionInputSchema';
import { DocumentCreateWithoutSectionInputSchema } from './DocumentCreateWithoutSectionInputSchema';
import { DocumentUncheckedCreateWithoutSectionInputSchema } from './DocumentUncheckedCreateWithoutSectionInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutSectionInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutSectionInput> = z.strictObject({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutSectionInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutSectionInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
});

export default DocumentUpsertWithoutSectionInputSchema;
