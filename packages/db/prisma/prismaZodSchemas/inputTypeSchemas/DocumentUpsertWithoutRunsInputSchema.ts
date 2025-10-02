import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutRunsInputSchema } from './DocumentUpdateWithoutRunsInputSchema';
import { DocumentUncheckedUpdateWithoutRunsInputSchema } from './DocumentUncheckedUpdateWithoutRunsInputSchema';
import { DocumentCreateWithoutRunsInputSchema } from './DocumentCreateWithoutRunsInputSchema';
import { DocumentUncheckedCreateWithoutRunsInputSchema } from './DocumentUncheckedCreateWithoutRunsInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutRunsInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutRunsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutRunsInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutRunsInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutRunsInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutRunsInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
});

export default DocumentUpsertWithoutRunsInputSchema;
