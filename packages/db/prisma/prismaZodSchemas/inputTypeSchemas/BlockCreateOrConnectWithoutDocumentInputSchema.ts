import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockCreateWithoutDocumentInputSchema } from './BlockCreateWithoutDocumentInputSchema';
import { BlockUncheckedCreateWithoutDocumentInputSchema } from './BlockUncheckedCreateWithoutDocumentInputSchema';

export const BlockCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.BlockCreateOrConnectWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlockCreateWithoutDocumentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default BlockCreateOrConnectWithoutDocumentInputSchema;
