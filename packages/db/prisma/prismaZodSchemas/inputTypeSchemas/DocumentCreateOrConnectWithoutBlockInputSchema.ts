import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutBlockInputSchema } from './DocumentCreateWithoutBlockInputSchema';
import { DocumentUncheckedCreateWithoutBlockInputSchema } from './DocumentUncheckedCreateWithoutBlockInputSchema';

export const DocumentCreateOrConnectWithoutBlockInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutBlockInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlockInputSchema) ]),
});

export default DocumentCreateOrConnectWithoutBlockInputSchema;
