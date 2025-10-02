import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutRunsInputSchema } from './DocumentCreateWithoutRunsInputSchema';
import { DocumentUncheckedCreateWithoutRunsInputSchema } from './DocumentUncheckedCreateWithoutRunsInputSchema';

export const DocumentCreateOrConnectWithoutRunsInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutRunsInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutRunsInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutRunsInputSchema) ]),
});

export default DocumentCreateOrConnectWithoutRunsInputSchema;
