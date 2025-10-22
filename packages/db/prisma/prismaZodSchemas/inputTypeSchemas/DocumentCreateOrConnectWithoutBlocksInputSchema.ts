import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutBlocksInputSchema } from './DocumentCreateWithoutBlocksInputSchema';
import { DocumentUncheckedCreateWithoutBlocksInputSchema } from './DocumentUncheckedCreateWithoutBlocksInputSchema';

export const DocumentCreateOrConnectWithoutBlocksInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutBlocksInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlocksInputSchema) ]),
});

export default DocumentCreateOrConnectWithoutBlocksInputSchema;
